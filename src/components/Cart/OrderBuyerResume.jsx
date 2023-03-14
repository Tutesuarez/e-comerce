
export const OrderbuyerResume = ({buyer}) => {
    return (
        <>
            <div className='container row p-0 m-0 mb-3'>
                <div className='col-12 col-lg-6'>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <p><span className='fw-bold'>Name:</span>  {buyer.name}</p>
                            <p><span className='fw-bold'>Surname:</span>  {buyer.surname}</p>
                        </div>
                        <div className='col-12 col-lg-6' >
                            <p><span className='fw-bold'>Phone Number:</span>  {buyer.phone}</p>
                            <p><span className='fw-bold'>Email:</span>  {buyer.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}