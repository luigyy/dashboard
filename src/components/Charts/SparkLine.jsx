import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';


const SparkLine = ({id, height, width, color, dataSource, type, currentColor}) => {
    return (
        <div>
            <SparklineComponent 
            id={id}
            height={height}
            width={width}
            lineWidth={1}
            valueType="Numeric"
            fill={color}
            border={{color:currentColor, width: 2}}
            dataSource={dataSource}
            xName='x'
            yName='yval'
            type={type}
            >
                <Inject services={[SparklineTooltip]}/>
            </SparklineComponent>
        </div>
    );
}

export default SparkLine;
