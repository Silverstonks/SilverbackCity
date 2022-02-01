import Loader from "react-loader-spinner";

const LoaderComponent = ({action}) => {
    return (
        <div className="" style={{ height: '400px' }}>
            <Loader type="Bars" color="#28a745" height={100} width={100} />
            <h3>{action ? action : ""}</h3>
        </div>
    )
}

export default LoaderComponent