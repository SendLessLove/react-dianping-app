import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../Star'
import './style.less'

class DetailInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        	info: false
        };
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    componentDidMount() {
    }
    render() {
        const data = this.props.data;
        return (
        	<div id="detail-info-container">
                <div className="info-container clear-fix">
                    <div className="info-img-container float-left">
                        <img src={data.img}/>
                    </div>
                    <div className="info-content">
                        <h1>{data.title}</h1>
                        <div className="star-container">
                            {/* 引用 Star 组件 */}
                            <Star star={data.star}/>
                            <span className="price">￥{data.price}</span>
                        </div>
                        <p className="sub-title">{data.subTitle}</p>
                    </div>
                </div>
                <p dangerouslySetInnerHTML={{__html: data.desc}} className="info-desc"></p>
            </div>
        )
    }
}

export default DetailInfo