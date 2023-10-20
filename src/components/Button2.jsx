import React from 'react';
// post css 자체에서 naming을 더해서 객체를 적용해주기 때문에 {} 안에서 사용하기
import styles from './Button2.module.css'

export default function Button2() {
    return (
        <button className={styles.button}>
            Button2
        </button>
    );
}

