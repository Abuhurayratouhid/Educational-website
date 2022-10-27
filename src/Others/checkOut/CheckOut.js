import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const info = useLoaderData()
    const { name,price,  } = info;
    return (
        <div className='text-center'>
            <h1 className='text text-4xl'>{name}</h1>
            {/* box  */}
            <div>
                <div className="stats bg-primary text-primary-content mt-10">

                    <div className="stat">
                        <div className="stat-title">Course fee </div>
                        <div className="stat-value">${price}</div>
                        <div className="stat-actions">
                            <button className="btn btn-sm btn-success">Confirm </button>
                        </div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">discount</div>
                        <div className="stat-value">$10%</div>
                        <div className="stat-actions">
                            <button className="btn btn-sm">only for students</button>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default CheckOut;