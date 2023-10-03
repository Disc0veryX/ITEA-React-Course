import React from "react";
import { connect } from "react-redux";
import { SelectLanguages } from "./SelectLanguages";
import Repos from "./Repos";
import { Oval } from 'react-loader-spinner';

const mapStateToProps = (state) => {
  return {
    loading: state.popularReducer.loading
  };
}

class Popular extends React.Component {
  // const loading = useSelector(state => state.popularReducer.loading);

  render() {
    return (
      <>
        <SelectLanguages />
        {this.props.loading
          ? <div className="loader"><Oval color="#d0021b" secondaryColor="#fe5a5f" height={80} width={80} /></div>
          : <Repos />
        }
      </>
    );
  }
} 

export default connect(mapStateToProps)(Popular);