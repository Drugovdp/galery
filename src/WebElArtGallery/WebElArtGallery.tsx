import React, {useState} from 'react';
import {Photo} from "./Types";
import s from './webelartgallery.module.scss'
import {PreviewGallery} from "./PreviewGallery/PreviewGallery";
import {MainPhoto} from "./MainPhoto/MainPhoto";
import {Navigation} from "./Navigation/Navigation";

type WebElArtGalleryProps = {
    photos: Photo[]
}

export const WebElArtGallery: React.FC<WebElArtGalleryProps> = (props) => {

    const {photos} = props

    const isPhotos = !photos.length ? [] : photos

    const [indexActivePhoto, setIndexActivePhoto] = useState(0)
    const activePhoto = photos[indexActivePhoto]
    const prevPhoto = photos[indexActivePhoto - 1]
    const nextPhoto = photos[indexActivePhoto + 1]

    return (
        <div className={s.webelartGallery}>
            <div className={s.webelartGalleryContainer}>
                <MainPhoto
                    prevPhoto={prevPhoto}
                    activePhoto={activePhoto}
                    nextPhoto={nextPhoto}
                   />
                <Navigation
                    className={s.webelartGalleryNavigation}
                    disabledPrev={!prevPhoto}
                    disabledNext={!nextPhoto}
                    onPrevClick={() => {
                        setIndexActivePhoto(indexActivePhoto - 1)
                    }}
                    onNextClick={() => {
                        setIndexActivePhoto(indexActivePhoto + 1)
                    }}
                />
            </div>
            <PreviewGallery
                activePhotoIndex={indexActivePhoto}
                photos={photos}
                className={s.webelartGalleryPreviewList}
            />
        </div>
    )
}

