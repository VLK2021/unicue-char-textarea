import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import './HomeStyle.css';


const Home = () => {
    const {register, handleSubmit} = useForm();

    const [uniqueChar, setUniqueChar] = useState();

    const submit = (data) => {
        const text = data.inputText;
        setUniqueChar(findUniqueChar(text));
    };

    const findUniqueChar = (text) => {
        //отримуємо масив сів
        const words = text.split(' ');
        //сюди записуються усі унікальні букви які є першими унікальними у слові
        const uniqueChars = [];

        words.forEach((word) => {
            //тут буде зберігатись кожне слово у вигляді: буква як ключ і цифра як значення  що означає скільки разів
            // ця буква повторюється в слові
            const charCount = {};

            for (let i = 0; i < word.length; i++) {
                //отримуємо одну букву
                const char = word[i];
                //визначаємо кількість входжень певного символу в слово
                charCount[char] = (charCount[char] || 0) + 1;
            }

            for (let i = 0; i < word.length; i++) {
                const char = word[i];
                if (charCount[char] === 1) {
                    //якщо число букви 1 то пушим в масив унікальних перших символів
                    uniqueChars.push(char);
                    break;
                }
            }
        });
        //ітеруєм масив унікальних перших символів і визначаємо один унікальний перший
        for (let i = 0; i < uniqueChars.length; i++) {
            const char = uniqueChars[i];
            if (uniqueChars.filter((c) => c === char).length === 1) {
                console.log(char);
                return char;
            }
        }

        return null;
    };

    return (
        <div className={'home width'}>

            {
                uniqueChar &&
                <div className={'result width'}>
                    {uniqueChar}
                </div>
            }

            <form onSubmit={handleSubmit(submit)}>
                <div className={'textarea-container width'}>
                    <textarea className={'custom-textarea'} {...register('inputText')} cols='100' rows="8"/>
                </div>

                <div className={'btn-block-send width'}>
                    <button type="submit" className={'btn-send'}>Send</button>
                </div>
            </form>
        </div>
    );

};

export {Home};