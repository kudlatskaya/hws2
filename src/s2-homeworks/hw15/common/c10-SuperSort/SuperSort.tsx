import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';


// добавить в проект иконки и импортировать
// const downIcon = '[\\/]'
const downIcon =  <ArrowDropDownIcon/>
// const upIcon = '[/\\]'
const upIcon = <ArrowDropUpIcon/>
const noneIcon = <UnfoldMoreIcon/>

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...

    return sort === down
        ? up
        : sort === up
            ? ''
            : down // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span id={id + '-sort-' + value} onClick={onChangeCallback}>
            {icon}
        </span>
    )
}

export default SuperSort
