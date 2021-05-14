import {PackDataType, SortDirections} from "../../api/api";
import {useDispatch} from "react-redux";
import {addPackTC, deletePackTC, getPacksTC, updatePackTC} from "./packs-reducer";
import {ColumnsType, FilterValue} from "antd/es/table/interface";
import {NavLink} from "react-router-dom";
import style from "./Packs.module.css";
import {Table, TablePaginationConfig} from "antd";
import {SorterResult} from "antd/lib/table/interface";
import React from "react";

type PacksTablePropsType = {
    cardPacks: Array<PackDataType>
    authUserId: string
}
type PackIdsType = {
    packId: string
    packUserId: string
}
type PackType = {
    key: string,
    name: string,
    cardsCount: number,
    updated: Date,
    createdBy: string,
    buttons: PackIdsType
}
export const PacksTable = ({cardPacks, authUserId}: PacksTablePropsType) => {
    const dispatch = useDispatch()

    const onAddBtnClick = () => {
        dispatch(addPackTC())
    }

    const onDeleteClick = (packId: string) => {
        dispatch(deletePackTC(packId))
    }

    const onUpdateClick = (packId: string) => {
        dispatch(updatePackTC(packId))
    }

    const data: Array<PackType> = cardPacks.map(p => ({
        key: p._id,
        name: p.name,
        cardsCount: p.cardsCount,
        updated: p.updated,
        createdBy: p.user_name,
        buttons: {packId: p._id, packUserId: p.user_id}
    }))

    const columns: ColumnsType<PackType> = [
        {title: 'Name', dataIndex: 'name', key: 'name', sorter: true},
        {title: 'Cards Count', dataIndex: 'cardsCount', key: 'cardsCount', sorter: true},
        {title: 'Last Update', dataIndex: 'updated', key: 'updated'},
        {title: 'Created by', dataIndex: 'createdBy', key: 'createdBy'},
        {
            title: () => <button onClick={onAddBtnClick}>Add</button>,
            dataIndex: 'buttons',
            key: 'buttons',
            render: ({packId, packUserId}: PackIdsType) => <>
                <button onClick={() => onDeleteClick(packId)} disabled={packUserId !== authUserId}>Delete</button>
                <button onClick={() => onUpdateClick(packId)} disabled={packUserId !== authUserId}>Update</button>
                <NavLink to={`/cards/${packId}`} activeClassName={style.active}>Cards</NavLink>
            </>,
        },
    ];

    const onChange = (pagination: TablePaginationConfig, filters: Record<string, FilterValue | null>,
                      sorter: SorterResult<PackType> | any) => {
        if (sorter.columnKey === 'name' && sorter.order === 'ascend') {
            dispatch(getPacksTC({sortDirection: SortDirections.Down, propToSortBy: 'name'}))
        } else if (sorter.columnKey === 'name' && sorter.order === 'descend') {
            dispatch(getPacksTC({sortDirection: SortDirections.Up, propToSortBy: 'name'}))
        } else if (sorter.columnKey === 'name' && sorter.order === undefined) {
            dispatch(getPacksTC({sortDirection: SortDirections.Up, propToSortBy: 'updated'}))
        }
        if (sorter.columnKey === 'cardsCount' && sorter.order === 'ascend') {
            dispatch(getPacksTC({sortDirection: SortDirections.Down, propToSortBy: "cardsCount"}))
        } else if (sorter.columnKey === 'cardsCount' && sorter.order === 'descend') {
            dispatch(getPacksTC({sortDirection: SortDirections.Up, propToSortBy: "cardsCount"}))
        } else if (sorter.columnKey === 'cardsCount' && sorter.order === undefined) {
            dispatch(getPacksTC({sortDirection: SortDirections.Up, propToSortBy: 'updated'}))
        }
    }

    return <Table columns={columns} dataSource={data} onChange={onChange} pagination={false} style={{width: '100%'}}
                  size={'small'}/>
}