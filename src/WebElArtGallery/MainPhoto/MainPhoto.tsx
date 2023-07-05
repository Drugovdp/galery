import React from "react";
import {CommonClassProps, Photo} from "../Types";
import cl from 'classnames'
import s from './mainPhoto.module.scss'

type TypePropsMainPhoto = {
    prevPhoto?: Photo
    activePhoto: Photo
    nextPhoto?: Photo
}

type GeneralTypePropsMainPhoto = TypePropsMainPhoto & CommonClassProps

export const MainPhoto: React.FC<GeneralTypePropsMainPhoto> = (props) => {

    const {prevPhoto, activePhoto, nextPhoto, className} = props

    return (
        <div className={cl(className, s.mainPhoto)}>
            {prevPhoto && (
                <img
                    className={s.mainPhotoImagePrev}
                    src={prevPhoto.src}
                    alt={prevPhoto.description}
                />
            )}
            <img
            className={s.mainPhotoImage}
            src={activePhoto.src}
            alt={activePhoto.description}
            />
            {nextPhoto && (
                <img
                    className={s.mainPhotoImageNext}
                    src={nextPhoto.src}
                    alt={nextPhoto.description}
                />
            )}
        </div>
    )

}