import React from 'react'
import logo from '../assets/placeholder.png'
import { Spacer } from '../components/spacer'

export function Title(props) {
    return (
        <div className="movies" style={{ paddingLeft: 100 }}>
            {
                props.data.map((x) => {
                    return (
                        <div className="d-flex" style={{ padding: 3 }} onClick={() => props.screen(x)}>
                            <div>
                                <img
                                    width="200"
                                    height="100"
                                    src={logo}
                                    className="img"
                                    color="#3f3f3f"
                                />
                                <h2 style={{ position: 'absolute', top: 220, marginLeft: 20, color: 'white', fontWeight: "bold", fontSize: 40 }}>{x.toUpperCase()}</h2>
                            </div>
                            <Spacer />
                            <span style={{ display: 'flex', fontSize: 15 }}>Popular {x}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}