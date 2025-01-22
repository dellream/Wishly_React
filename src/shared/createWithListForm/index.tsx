import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button, DatePicker, Form, Input} from "antd";
import styles from "./styles.scss";
import {RequiredMark} from "antd/es/form/Form";
import {InfoCircleOutlined} from '@ant-design/icons';
import ruRU from "antd/locale/ru_RU";


const CreateWishListForm: React.FC = () => {
    const navigate = useNavigate();

    const handleSave = () => {
        // Логика сохранения вишлиста
        console.log("Wish list created");
        navigate("/"); // Возврат к предыдущему контенту
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
                initialValues={{requiredMarkValue: requiredMark}}
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

                <Form.Item label="Комментарий">
                    <Input placeholder="Напишите что-нибудь вашим друзьям, это может быть приветствие или пожелание"/>
                </Form.Item>

                <Form.Item label="Дата события" tooltip="Дата события, к которой создается вишлист (необязательно)">
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
