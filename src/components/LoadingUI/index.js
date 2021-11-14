import { Loading, LoadingContainer } from "./LoadingElements";

const LoadingUI = ({isLoading}) => {
    return (
        <LoadingContainer isLoading={isLoading}>
            <Loading>
            </Loading>
        </LoadingContainer>
    )
}

export default LoadingUI;
