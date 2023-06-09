import React, { useEffect, useState } from 'react'
import { Tag, Container } from './Style';
import { AiOutlineClose } from 'react-icons/ai'

function Component({onChange, value}) {

    const [tags, setTags] = useState(value);

    useEffect(() => {
        onChange(tags)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[tags])

    function handleKeyDown(e){
        if(e.key !== 'Enter') return
        const value = e.target.value
        if(!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
    }
    function removeTag (index) {
        setTags(tags.filter((tag, i) => i !== index))
    }

  return (
    <Container>
        {tags.map((tag, index) => {
            return <Tag key={index}>
                <AiOutlineClose color='red' size={'12px'} className='button' onClick={() => removeTag(index)}/>
                <p>{tag}</p>
            </Tag>
        })}
        <input className='input' onKeyDown={(e) => handleKeyDown(e)} type="text" placeholder='Digite um ambiente...' />
    </Container>
  )
}

export default Component