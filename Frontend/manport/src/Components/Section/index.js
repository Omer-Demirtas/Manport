import './index.css'



const Section = (props) =>
{
    const {
        children,
        title,
        id
    } = props;

    return (
        <div
                className='p-3 text-start  section-item'
            >
                <div
                    style={{borderBottom: '1px solid white'}}
                >
                    <a 
                        className="section-item-header text-white" 
                        data-bs-toggle="collapse" 
                        href={"#item"+id} 
                        role="button" 
                        aria-expanded="false"
                        aria-controls={"item"+id}>
                        <h3>{title}</h3>
                    </a>
                </div>
                
                <div className="collapse "
                    id={"item"+id}
                >
                    <div className='pt-3'>
                        {children}
                    </div>
            </div>
        </div>
    )
}


Section.defaultProps = 
{
    title: 'Title',
    children: 'default children'
}

export default Section;