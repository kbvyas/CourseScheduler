import React from 'react'
import RecommendedCourse from './RecommendedCourse'

class RecommendedArea extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <>
                <div>
                    {
                        this.props.courses.map(data => (
                            <RecommendedCourse data={data} />
                        ))
                    }
                </div>
            </>
        )
    }
}

export default RecommendedArea