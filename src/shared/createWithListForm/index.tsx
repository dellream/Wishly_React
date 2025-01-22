import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button, DatePicker, Form, Input, Switch} from "antd";
import styles from "./styles.scss";
import {RequiredMark} from "antd/es/form/Form";
import {useCreateWishList} from "api/queries/wishlists";
import {WishListCreateIn} from "api/types/wishlists";


const CreateWishListForm: React.FC = () => {
    const navigate = useNavigate();
    const { mutate: createWishList } = useCreateWishList();  // Деструктурируем mutate из хука

    const handleSave = (values: any) => {
        const { title, description, isPublic, eventDate } = values;
        const data: WishListCreateIn = {
            title: title,
            description: description || undefined,
            is_public: isPublic || false,
            event_date: eventDate ? eventDate.format("YYYY-MM-DD") : undefined, // Форматируем дату
        };
        createWishList(data);

        navigate("/");
    };

    const [form] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional');

    const onRequiredTypeChange = ({requiredMarkValue}: { requiredMarkValue: RequiredMark }) => {
        setRequiredMarkType(requiredMarkValue);
    };

    return (
        <div className={styles.createWishListForm}>
            <Button onClick={() => navigate(-1)}>Назад</Button>
            <h3>Создание нового вишлиста</h3>

            <Form
                form={form}
                layout="vertical"
                initialValues={{requiredMarkValue: requiredMark, isPublic: false,}}
                onValuesChange={onRequiredTypeChange}
                onFinish={handleSave}
            >
                <Form.Item
                    label="Название вишлиста"
                    name="title"
                    required
                    tooltip="Это название будет видно вашим друзьям"
                    rules={[
                        { required: true, message: "Не забудьте про название, это важно =)" },
                    ]}
                >
                    <Input placeholder="Например, День рождения или Новый год"/>
                </Form.Item>

                <Form.Item label="Комментарий" name="description">
                    <Input placeholder="Напишите что-нибудь вашим друзьям, это может быть приветствие или пожелание"/>
                </Form.Item>

                <Form.Item
                    label="Сделать вишлист публичным (по умолчанию вишлист будет доступ только вам)"
                    name="isPublic"
                    valuePropName="checked"
                >
                    <Switch />
                </Form.Item>

                <Form.Item
                    label="Дата события"
                    tooltip="Дата события, к которой создается вишлист (необязательно)"
                    name="eventDate"
                >
                    <DatePicker
                        format="DD-MM-YYYY" // Задаем формат даты
                        placeholder="Выберите дату" // Локализованный placeholder
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">Добавить новый вишлист</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CreateWishListForm;
