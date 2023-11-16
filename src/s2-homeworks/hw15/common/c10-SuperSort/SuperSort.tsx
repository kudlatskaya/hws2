import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AutorenewIcon from '@mui/icons-material/Autorenew';

// добавить в проект иконки и импортировать
// const downIcon = '[\\/]'
const downIcon = ArrowDownwardIcon
// const upIcon = '[/\\]'
 const upIcon = ArrowUpwardIcon
const noneIcon = AutorenewIcon

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    return up // исправить
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
    {/*сделать иконку*/}
    {/*<img*/}
    {/*    id={id + '-icon-' + sort}*/}
    {/*    src={icon}*/}
    {/*/>*/}
    {/*а это убрать*/}

    return (
        <span id={id + '-sort-' + value} onClick={onChangeCallback}>
            <img
                id={id + '-icon-' + sort}
                src={icon.muiName}
            />
        </span>
    )
}

export default SuperSort
