import { MyCompany } from "./MyCompany";
import PropTypes from 'prop-types';

export const  ActualPage = ({ pathName }) => {
    const renderContent = () => {
        switch (pathName) {
          case "/dashboard/my-company":
            return <MyCompany />;
          default:
            return <div>Ruta no encontrada</div>;
        }
      };

    return (
        <div className="flex justify-center items-center overflow-auto h-auto">
            {renderContent()}
        </div>
    )
}

ActualPage.propTypes = {
    pathName: PropTypes.string.isRequired
}