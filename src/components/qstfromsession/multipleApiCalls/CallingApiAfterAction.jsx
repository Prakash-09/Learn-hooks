import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { inputField } from '../../utils/Utils';
import axios from 'axios';

export default function CallingApiAfterAction() {
    const [storePosts, setStorePosts] = useState([])
    const [storeUsers, setStoreUsers] = useState([])
    const [storeAlbums, setStoreAlbums] = useState([])
    const [storeTodos, setStoreTodos] = useState([])
    const [selectedOption, setSelectedOption] = useState('ALBUMS')

    useEffect(() => {
        if (selectedOption === 'POSTS') {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    setStorePosts(response.data)
                })
                .catch(error => {
                    console.log(error.message)
                })
            // console.log("POSTS")
        } else if (selectedOption === 'USERS') {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    setStoreUsers(response.data)
                })
                .catch(error => {
                    console.log(error.message)
                })
            // console.log("USERS")
        } else {
            axios.get('https://jsonplaceholder.typicode.com/albums')
                .then(response => {
                    setStoreAlbums(response.data)
                })
                .catch(error => {
                    console.log(error.message)
                })
            // console.log("ALBUMS")
        }
    }, [selectedOption])

    const handleAnotherApiData = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            setStoreTodos(response.data)
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    const handleOption = (name, val) => {
        setSelectedOption(val)
    }

    const OPTIONS = [
        { label: "Get Posts", value: "POSTS" },
        { label: "Get Albums", value: "ALBUMS" },
        { label: "Get Users", value: "USERS" },
    ]

    return (
        <div className="text-center mt-3">
            <Row>
                <Col>
                    {inputField('select', 'options', '', selectedOption, handleOption, {}, OPTIONS, 'options')}
                </Col>
            </Row>
            <Row className="m-0">
                <Col>
                    {selectedOption === "POSTS" && storePosts &&
                        storePosts.map((post, postIdx) =>
                            <p key={postIdx}>{post.title}</p>
                        )
                    }
                    {selectedOption === "ALBUMS" && storeAlbums &&
                        storeAlbums.map((album, albumIdx) =>
                            <p key={albumIdx}>{album.title}</p>
                        )
                    }
                    {selectedOption === "USERS" && storeUsers &&
                        <Row>
                            <Col>
                                {storeUsers.map((user, userIdx) =>
                                    <p key={userIdx}>{user.name}</p>
                                )}
                            </Col>
                            <Col>
                                <Button variant="primary" size="sm" onClick={handleAnotherApiData} >Get another Api Data</Button>
                                {storeTodos && 
                                    storeTodos.map((todo, todoIdx) => 
                                        <p key={todoIdx}>{todo.title}</p>
                                    )
                                }
                            </Col>
                        </Row>
                    }
                </Col>

            </Row>

        </div>
    );
}