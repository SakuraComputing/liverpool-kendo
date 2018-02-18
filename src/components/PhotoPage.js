import React from 'react';
import Gallery from 'react-photo-gallery';
import Photo from './Photo';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

const photos = [
    { src: '/images/kendo.jpg', width: 4, height: 3 },
    { src: '/images/kendokata.jpg', width: 1, height: 1 },
    { src: '/images/tsuki.jpeg', width: 5, height: 4 },
    { src: '/images/do.jpg', width: 4, height: 4 },
    { src: '/images/miyazaki.jpg', width: 4, height: 4 },
    { src: '/images/alljapan.jpg', width: 5, height: 4 },
    { src: '/images/teramoto.jpg', width: 6, height: 6 },

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

