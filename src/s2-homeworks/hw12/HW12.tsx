import React, {ChangeEvent, useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {changeThemeId, StoreType, themeReducer} from './bll/themeReducer'

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */


const themes = [
    {id: 1, value: 'Light'},
    {id: 2, value: 'Blue'},
    {id: 3, value: 'Dark'},

]

const bg = [
    { color: '#000000', background: '#FFFFFF'},
    { color: '#000000', background: '#DDEEFF'},
    { color: '#FFFFFF', background: '#212A34'},
]

const HW12 = () => {
    // взять ид темы из редакса
    const themeId = useSelector<StoreType, number>((state) => state.theme.themeId)
    const dispatch = useDispatch()

    const change = (id: number) => { // дописать функцию
        dispatch(changeThemeId(id))
    }

    useEffect(() => {
        document.documentElement.dataset.theme = themeId + '';
        let select = document.getElementById('hw12-select-theme');
        if (select) {
            select.style.background = bg[themeId-1].background
            select.style.color = bg[themeId-1].color
        }
    }, [themeId])

    return (
        <div id={'hw12'}>
            <div id={'hw12-text'} className={s2.hwTitle}>
                Homework #12
            </div>

            <div className={s2.hw}>
                <span className={s.label}>Выберите тему</span>
                <SuperSelect
                    id={'hw12-select-theme'}
                    className={s.select}
                    // сделать переключение тем
                    onChangeOption={change}
                    options={themes}
                />
            </div>
        </div>
    )
}

export default HW12
