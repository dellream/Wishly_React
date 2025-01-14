import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "antd";
import styles from "./styles.scss";

const CreateWishListForm: React.FC = () => {
    const navigate = useNavigate();

    const handleSave = () => {
        // Логика сохранения вишлиста
        console.log("Wish list created");
        navigate("/"); // Возврат к предыдущему контенту
    };

    return (
        <div className={styles.createWishListForm}>
            <Button onClick={() => navigate(-1)}>Назад</Button>
            <h3>Создание нового вишлиста</h3>
            <Input placeholder="Название вишлиста" className={styles.input} />
            <Button type="primary" onClick={handleSave} className={styles.saveButton}>
                Сохранить
            </Button>
        </div>
    );
};

export default CreateWishListForm;
