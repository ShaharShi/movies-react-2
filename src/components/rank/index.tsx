import React, { useState } from "react"
import { StarFill } from 'react-bootstrap-icons';


interface IProps {
    stars: number,
    paintStarOption?: boolean
}

enum StarColors {
    primary = "red",
    secondary = "blue"
}

export default function Rank(props: IProps) {
    const [starColor, setStarColor] = useState(StarColors.primary)

    function changeStartsColor() {
        if(!props.paintStarOption) return;
        const color = starColor === StarColors.primary ? StarColors.secondary : StarColors.primary
        setStarColor(color)
    }
    const numberOfStars = new Array(props.stars).fill(true, 0)
    return <div>
        {numberOfStars.map((_, index) => <StarFill key={index} fill={starColor} onClick={changeStartsColor} />)}
    </div>
} 