import { connect } from "react-redux";
import React from "react";
import { TodoState } from "../store/modules/TodoTypes";
import { setFilter } from "../store/modules/FilterTypes";
import { Dispatch } from "redux";
import Link from "../components/Link";

export interface FilterContainerState {
  TodoReducer?: TodoState;
  filter: string;
}
export interface FilterContainerProps {
  filter: string;
  active: boolean;
  setFilterAction: (filter: string) => void;
}
class FilterContainer extends React.Component<FilterContainerProps> {
  onSetFilter = (filter: string): void => {
    const { setFilterAction } = this.props;
    setFilterAction(filter);
  };
  render() {
    const { filter, active } = this.props;
    const { onSetFilter } = this;
    return (
      <>
        <Link
          children={filter}
          active={active}
          setFilter={() => onSetFilter(filter)}
        />
      </>
    );
  }
}
const mapStateToProps = (
  state: FilterContainerState,
  ownProps: FilterContainerState
) => {
  return {
    active: state.filter === ownProps.filter,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch,
  ownProps: FilterContainerState
) => {
  return {
    setFilterAction: () => dispatch(setFilter(ownProps.filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
