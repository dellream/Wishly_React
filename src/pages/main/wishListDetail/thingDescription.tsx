import React, { useState } from "react";
import styles from "./styles.scss";
import { DownOutlined, UpOutlined } from "@ant-design/icons"; // импорт иконок стрелочек

export const ThingDescription: React.FC<{ description: string | null }> = ({ description }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    if (!description) {
        return null; // Если нет описания, ничего не показываем
    }

    return (
        <div>
            {isExpanded && (
                <button onClick={handleToggle} className={styles.toggleButton}>
                    Скрыть комментарий <UpOutlined />
                </button>
            )}
            {isExpanded ? (
                <p>{description}</p>
            ) : (
                <button onClick={handleToggle} className={styles.toggleButton}>
                    Развернуть комментарий <DownOutlined />
                </button>
            )}
        </div>
    );
};
