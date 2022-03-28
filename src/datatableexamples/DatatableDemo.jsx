import React, {useEffect, useState, useMemo} from 'react'
import DataTable from 'react-data-table-component';
import DataList from './DataList';
import CustomStyles from './CustomStyles';
import ColoumList from './ColoumList';

function DatatableDemo() {

    const [isLoading, setIsLoading] = useState([true]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <DataTable
            title="Sample DataTable"
            columns={ColoumList}
            data={DataList}
            pagination
            selectableRows  
            customStyles={CustomStyles}  
            progressPending={isLoading}        
        />
    );
};

export default DatatableDemo;