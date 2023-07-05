import React from 'react';
import {CommonClassProps, Photo} from "../Types";
import cl from 'classnames'
import s from './navigation.module.scss'

type TypePropsNavigation = {
    disabledPrev: boolean
    disabledNext: boolean
    onPrevClick: () => void
    onNextClick: () => void
}

type GeneralTypePropsNavigation = TypePropsNavigation & CommonClassProps

export const Navigation: React.FC<GeneralTypePropsNavigation> = (props) => {

    const {disabledPrev, disabledNext, onPrevClick, onNextClick, className} = props

    return (
        <div className={cl(s.navigation, className)}>
            <button
                disabled={disabledPrev}
                className={cl(s.navigationBtn, s.navigationBtnLeft)}
                onClick={onPrevClick}
            >
                Prev
            </button>
            <button
                disabled={disabledNext}
                className={cl(s.navigationBtn, s.navigationBtnRight)}
                onClick={onNextClick}
            >
                Next
            </button>
        </div>
    )
}