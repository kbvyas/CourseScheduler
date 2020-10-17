import React from 'react'
import EnrolledCourse from './EnrolledCourse'

class EnrolledArea extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            completeCourses: [],
            complete: []
        }
    }

    componentDidMount() {
        this.initialData()
    }

    async initialData() {
        let coursesURL = 'http://mysqlcs639.cs.wisc.edu:53706/api/react/students/5022025924/classes/completed'
        let coursesData = await (await fetch(coursesURL)).json()
        let temp = this.props.courses

        temp = temp.filter((v) => {
            return coursesData.data.includes(v.number)
        })
        
        this.setState({
            completeCourses: coursesData.data,
            complete: temp
        })
    }

    render() {
        return (
            <>
                { 
                    this.state.complete.map((data) => (  
                      // onSelect
                        <EnrolledCourse data={data} courses={this.state.complete} onSelect={(data, course) => { this.props.onSelect(data, course) }}/>
                    ))
                }
            </>
        )
    }
}

export default EnrolledArea