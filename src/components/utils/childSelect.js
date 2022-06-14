import Select from 'react-select'

const ChildSelect = (props) => 
{
    const options = [];

    if (props.parent)
    {
        props.parent.children.map(
            function(child){
                options.push({value: child.id, label:child.nickname});
            }
        )
    }

    return(
        <div id='selectChild'>
        <Select options={options} placeholder="Please select a child" onChange={props.loadChildInfo}/>
    </div>
    )
}

export default ChildSelect;