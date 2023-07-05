import React, {useEffect, useMemo, useRef, useState} from "react";
import {CommonClassProps, Photo} from "../Types";
import cl from 'classnames'
import s from './previewGallery.module.scss'

type TypePropsPreviewGallery = {
    activePhotoIndex: number
    photos: Photo[]
}

type GeneralTypePropsPreviewGallery = TypePropsPreviewGallery & CommonClassProps

export const PreviewGallery: React.FC<GeneralTypePropsPreviewGallery> = (props) => {

    const {activePhotoIndex, photos, className} = props

    const PhotosMap = photos.length ? photos.map(p => {
        return (
            <li key={p.id} className={s.previewGallaryPreview}>
                <img src={p.preview} alt={p.description} className={s.previewGallaryImage}/>
            </li>
        )
    }) : null

    const prewiewContainer = useRef<HTMLUListElement>(null)

    useEffect(() => {
        if(!prewiewContainer.current) {
            return
        }
        prewiewContainer.current.style.transform = `translate3d(-${activePhotoIndex * 164}px, 0, 0)`
    }, [activePhotoIndex])

    return (
        <div className={cl(s.previewGallary, className)}>
            {useMemo(() => (
                <ul className={s.previewGallaryTrack} ref={prewiewContainer}>
                    {PhotosMap}
                </ul>
            ), [])}
            <div className={s.previewGallaryCover}>
                {activePhotoIndex + 1} / {photos.length}
            </div>
        </div>
    )
}