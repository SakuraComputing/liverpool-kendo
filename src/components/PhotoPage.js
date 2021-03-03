import React from 'react';
import Gallery from 'react-photo-gallery';
import Photo from './Photo';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

const photos = [
    { src: '/images/IMG_0966.jpg', width: 7, height: 5},
    { src: '/images/keiko2.png', width: 5, height: 3 },
    { src: '/images/bowden.jpg', width: 6, height: 5 },
];

const SortablePhoto = SortableElement(Photo);
const SortableGallery = SortableContainer(({photos}) => {
    return <Gallery photos={photos} ImageComponent={SortablePhoto}/>
});

export default class PhotoPage extends React.Component {
    constructor(){
        super();
        this.onSortEnd = this.onSortEnd.bind(this);
        this.state = {
            photos: photos,
        };
    }
    onSortEnd ({ oldIndex, newIndex }) {
        this.setState({
            photos: arrayMove(this.state.photos, oldIndex, newIndex),
        });
    }
    render() {
        return (
            <SortableGallery axis={"xy"} photos={this.state.photos} onSortEnd={this.onSortEnd} />
        )
    }
}

