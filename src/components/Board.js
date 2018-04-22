import React from 'react'
import Note from './Note'

class Board extends React.Component {

    static defaultProps = {
        count: 10
    };

    constructor() {
        super();

        this.state = {
            notes: []
        };

        this.nextId = this.nextId.bind(this);
        this.add = this.add.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
        this.eachNote = this.eachNote.bind(this);
    }

    componentWillMount() {
        const self = this;
        if (this.props.count) {
            $.getJSON("http://baconipsum.com/api/?type=all-meat&sentences=" + this.props.count + "&start-with-lorem=1&callback=?", function (results) {
                results[0].split('. ').forEach(function (sentence) {
                    self.add(sentence.substring(0, 40));
                });
            });
        }
    }

    nextId() {
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    }

    add(text) {
        const arr = this.state.notes;
        arr.push({
            id: this.nextId(),
            note: text
        });
        this.setState({notes: arr});
    }

    update(newText, i) {
        console.log("Updating item at index " + i + ", " + newText);
        const arr = this.state.notes;
        arr[i].note = newText;
        this.setState({notes: arr});
    }

    remove(i) {
        console.log("Removing item at index " + i);
        const arr = this.state.notes;
        const n = arr.splice(i, 1);
        this.setState({notes: arr});
    }

    eachNote(note, i) {
        return <Note key={note.id}
                     index={i}
                     onChange={this.update}
                     onRemove={this.remove}>{note.note}</Note>
    }

    render() {
        return (

            <div className="board">
                {this.state.notes.map(this.eachNote)}
                <button className="btn btn-sm btn-success glyphicon glyphicon-plus"
                        onClick={this.add.bind(null, "New Note")}/>
            </div>

        )
    }

}
export default Board;
