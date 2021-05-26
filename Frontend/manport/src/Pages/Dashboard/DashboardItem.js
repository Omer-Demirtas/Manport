import React from "react";

const getColor = (type) => 
{
    switch (type) {
        case 3:
            return 'danger'
        case 2:
            return 'warning'
        case 1:
            return 'secondary'
        default:
            return 'success';
    }
}


const JobItem = ({j}) => 
{


    return (
        <div 
            
            style={{minHeight: '54px', cursor: 'grabbing', border: '1px solid white'}}
            className={'col-4  bg-' + getColor(j.errorType)}>
            <p
                style={{marginTop: '16px'}}
                >{j.issueType}
            </p>
        </div>
    )
}

const ProdItem = ({p}) =>
{

    return (
        <div
            style={{minHeight: '5rem'}}
            className='mt-3 '
        >
            <h6
                className={'my-3 mx-3 text-' + getColor(p.errorType)}
                style={{borderBottom: '1px solid white'}}
            >
                {p.name}
            </h6>
            <div className='row p-0 m-0'>
                {
                    p.jobs.map(j => <JobItem key={j.id} j={j}/>)
                }
            </div>
        </div>
    )
}


const CountryItem = ({c}) =>
{
    return (
        <div className='p-0 col-md-4 col-lg-3'
            style={{minHeight: '5rem', border: '1px solid white'}}
        >
            <h5
                className={'my-3 text-' + getColor(c.errorType)}
                style={{borderBottom: '1px solid white'}}
            >
                {c.name}
            </h5>

            <div>
                {
                    c.prods.map(p => <ProdItem key={p.id} p={p} />)
                }
            </div>
        </div>
    )
}

const DashboardItem = (props) =>
{
    const {app} = props;

    const err = app.errorType === 3;
    const isOpen = (err ? 'show' : '')
    const width = (app.countries.length === 0 ? 3 : (app.countries.length * 2))

    return (
        <div className={'mt-5  col-md-' + width}>
            <div
                className='dashboard-item'
            >
                <a 
                    className='dashboard-item-header'
                    data-bs-toggle="collapse" 
                    href={"#c"+(app.id)}
                    role="button" 
                    aria-expanded="false" 
                    aria-controls={"c"+(app.id)}
                >
                    <h3 className={'px-5 mt-3 ' + (err ? 'blink' : '')}>
                        {app.shortCode}
                    </h3>
                </a>
            </div>
            <div className={"collapse multi-collapse " + isOpen }
                id={"c"+(app.id)}
            >
                <div 
                    style={{minHeight: '5rem'}}
                    className='row p-0 m-0 text-center'>
                    {
                        app.countries.map(c => (
                            <CountryItem  key={c.id} c={c} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

/*


*/
export default DashboardItem;

