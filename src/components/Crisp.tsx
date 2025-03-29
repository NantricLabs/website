"use client"

import { Component } from "react"

import { Crisp } from "crisp-sdk-web"

class CrispChat extends Component {
    componentDidMount() {
        if (process.env.NEXT_PUBLIC_CRISP_ID) Crisp.configure(process.env.NEXT_PUBLIC_CRISP_ID as string)
    }

    render() {
        return null
    }
}
export default CrispChat
