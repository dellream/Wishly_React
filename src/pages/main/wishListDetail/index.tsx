import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Button, Spin, Table, Space, Modal, Form, Input, InputNumber, Menu, Dropdown, MenuProps} from "antd";
import {
    useGetWishList,
    useCreateThingInWishList,
    useUpdateThingInWishList,
    useDeleteThingInWishList
} from "api/queries/wishlists";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import styles from "./styles.scss";
import {Thing, ThingCreateIn, ThingUpdateIn} from "api/types/things";
import {EllipsisOutlined, EditOutlined, DeleteOutlined, CheckCircleOutlined, LeftOutlined} from '@ant-design/icons';
import {PATH} from "jsConstants";


dayjs.locale("ru");

export const WishListDetail: React.FC = () => {
    const navigate = useNavigate();
    const {id} = useParams<{ id: string }>();
    const {data: wishList, isLoading, error} = useGetWishList(Number(id));

    const createMutation = useCreateThingInWishList();
    const updateMutation = useUpdateThingInWishList();
    const deleteMutation = useDeleteThingInWishList();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingThing, setEditingThing] = useState<Thing | null>(null);

    const [form] = Form.useForm<ThingCreateIn | ThingUpdateIn>();

    if (isLoading) {
        return (
            <div className={styles.loader}>
                <Spin size="large"/>
            </div>
        );
    }

    if (error) {
        return <p className={styles.errorText}>Не удалось загрузить информацию о вишлисте</p>;
    }

    if (!wishList) {
        return <p className={styles.noWishListText}>Вишлист не найден</p>;
    }

    const formattedDate = dayjs(wishList.data.event_date).format("D MMMM YYYY");

    const handleAdd = () => {
        setEditingThing(null);
        setIsModalOpen(true);
        form.resetFields();
    };

    const handleEdit = (thing: Thing) => {
        setEditingThing(thing);
        setIsModalOpen(true);
        form.setFieldsValue({
            title: thing.title,
            description: thing.description,
            priority: thing.priority,
            price: thing.price,
            image_link: thing.image_link,
            shop_link: thing.shop_link,
        });
    };

    const handleDelete = (thingId: number) => {
        deleteMutation.mutate({wishListId: Number(id), thingId});
    };

    const handleSubmit = (values: ThingCreateIn | ThingUpdateIn) => {
        if (editingThing) {
            updateMutation.mutate({
                data: values as ThingUpdateIn,
                wishListId: Number(id),
                thingId: editingThing.id,
            });
        } else {
            const creationData: ThingCreateIn = {
                title: values.title!,
                description: values.description || null,
                priority: values.priority || 1, // Default priority = 1
                price: values.price || null,
                image_link: values.image_link || null,
                shop_link: values.shop_link || null,
                is_done: false,
            };

            createMutation.mutate({creation_data: creationData, wishListId: Number(id)});
        }

        setIsModalOpen(false);
    };

    const handleToggleDone = (thing: Thing) => {
        updateMutation.mutate({
            data: {is_done: !thing.is_done} as ThingUpdateIn,
            wishListId: Number(id),
            thingId: thing.id,
        });
    };

    const sortedThings = [...wishList.data.things].sort((a, b) => {
        if (a.is_done !== b.is_done) return a.is_done ? 1 : -1; // Завершённые вниз
        return b.priority - a.priority; // Приоритет по убыванию
    });

    const menuItems = (thing: Thing): MenuProps['items'] => [
        {
            label: thing.is_done ? 'Вернуть в активное' : 'Отметить как завершённое',
            key: 'done',
            icon: <CheckCircleOutlined />,
            onClick: () => handleToggleDone(thing),
        },
        {
            label: 'Редактировать',
            key: 'edit',
            icon: <EditOutlined />,
            onClick: () => handleEdit(thing),
        },
        {
            label: 'Удалить',
            key: 'delete',
            icon: <DeleteOutlined />,
            danger: true,
            onClick: () => handleDelete(thing.id),
        },
    ];


    const columns = [
        {
            title: "Фото",
            dataIndex: "image_link",
            key: "image_link",
            render: (imageLink: string | undefined) =>
                imageLink ? (
                    <img
                        src={imageLink}
                        alt="Фото"
                        style={{
                            width: "120px",
                            height: "120px",
                            objectFit: "cover",
                            borderRadius: "4px",
                        }}
                    />
                ) : (
                    "Нет фото"
                ),
        },
        {
            title: "Название",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Описание",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Приоритет",
            dataIndex: "priority",
            key: "priority",
        },
        {
            title: "Цена",
            dataIndex: "price",
            key: "price",
            render: (price: number | undefined) => (price ? `${price} ₽` : "-"),
        },
        {
            title: "",
            key: "actions",
            render: (thing: Thing) => {
                return (
                    <Dropdown menu={{items: menuItems(thing)}} trigger={['click']}>
                        <Button type="text" icon={<EllipsisOutlined/>}/>
                    </Dropdown>
                );
            },
        },
    ];

    return (
        <div className={styles.wishListDetail}>
            <button onClick={() => navigate(PATH.MAIN)} className={styles.backButton}>
                <LeftOutlined className={styles.backIcon}/>
                К списку вишлистов
            </button>

            <div className={styles.title}>
                <h1>{wishList.data.title}</h1>

                <Button onClick={handleAdd} className={styles.addButton}>
                    Добавить вещь
                </Button>
            </div>

            <p className={styles.description}>{wishList.data.description}</p>
            <div className={styles.meta}>
                <div>
                    <span className={styles.metaLabel}>Публичный:</span>{" "}
                    {wishList.data.is_public ? "Да" : "Нет"}
                </div>
                <div>
                    <span className={styles.metaLabel}>Дата события:</span>{" "}
                    {formattedDate}
                </div>
            </div>


            <Table
                dataSource={sortedThings}
                columns={columns}
                rowKey="id"
                pagination={false}
                className={styles.table}
                rowClassName={(record: Thing) => (record.is_done ? `${styles.doneRow}` : '')}
                onRow={(record: Thing) => ({
                    onClick: (e) => {
                        const target = e.target as HTMLElement;

                        if (target.closest(".ant-dropdown") || target.closest(".ant-btn")) {
                            return;
                        }

                        if (record.shop_link) {
                            window.open(record.shop_link, "_blank");
                        }
                    },
                    style: {
                        cursor: record.shop_link ? "pointer" : "default",
                    },
                })}
            />

            <Modal
                title={editingThing ? "Редактировать вещь" : "Добавить вещь"}
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                onOk={() => form.submit()}
            >
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={(values) => handleSubmit(values)}
                >
                    <Form.Item
                        label="Название"
                        name="title"
                        rules={[{required: !editingThing, message: "Введите название"}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Описание" name="description">
                        <Input.TextArea rows={3}/>
                    </Form.Item>
                    <Form.Item label="Приоритет" name="priority">
                        <InputNumber min={1} max={5}/>
                    </Form.Item>
                    <Form.Item label="Цена" name="price">
                        <InputNumber min={0} step={100}/>
                    </Form.Item>
                    <Form.Item
                        label="Ссылка на магазин"
                        name="shop_link"
                        rules={[
                            {
                                type: "url",
                                message: "Введите корректный URL (например, https://example.com)"
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Ссылка на изображение"
                        name="image_link"
                        rules={[
                            {
                                type: "url",
                                message: "Введите корректный URL (например, https://example.com)"
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};