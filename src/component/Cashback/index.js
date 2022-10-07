import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { Table, Button, Card, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCashBacks,
  getTotalCashbacks,
} from "../../actions/cashback.actions";
import "./style.css";

const Cashback = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalCashbacks());
    dispatch(getAllCashBacks(0));
  }, []);

  const cashbacks = useSelector((state) => state.cashbacks);
  const cashbackList = cashbacks.cashbackList;
  // const reversedcashbackList = [...cashbackList].reverse();

  const length = cashbacks.totalPages;
  const totalPages = length % 10 == 0 ? length / 10 : parseInt(length / 10) + 1;

  const [currentPage, setCurrentPage] = useState(0);

  const firstPage = () => {
    setCurrentPage(0);
    dispatch(getAllCashBacks(0));
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
    dispatch(getAllCashBacks(currentPage - 1));
  };

  const lastPage = () => {
    setCurrentPage(totalPages - 1);
    dispatch(getAllCashBacks(totalPages - 1));
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    dispatch(getAllCashBacks(currentPage + 1));
  };

  return (
    <Layout sidebar>
      {cashbackList.length !== 0 ? (
        <>
          <Table striped bordered hover className="cashback-table">
            <thead className="text-center">
              <tr>
                <th>#</th>
                <th>Cashback Earned</th>
                <th>Current Amount</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {cashbackList.map((cashback, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{cashback.cashback_amount}</td>
                  <td>{cashback.current_amount}</td>
                  <td>{cashback.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Card.Footer className="all-btn">
            <div style={{ marginLeft: "450px" }}>
              Showing Page {currentPage + 1} of {totalPages}
            </div>
            <div style={{ marginLeft: "430px" }}>
              <InputGroup size="sm">
                <Button
                  data-testid="first"
                  type="button"
                  className="button"
                  variant="outline-dark"
                  disabled={currentPage === 0 ? true : false}
                  onClick={firstPage}
                >
                  First
                </Button>
                <Button
                  data-testid="prev"
                  type="button"
                  className="button"
                  variant="outline-dark"
                  disabled={currentPage === 0 ? true : false}
                  onClick={prevPage}
                >
                  Prev
                </Button>
                <Button
                  data-testid="next"
                  type="button"
                  className="button"
                  variant="outline-dark"
                  disabled={currentPage === totalPages - 1 ? true : false}
                  onClick={nextPage}
                >
                  Next
                </Button>
                <Button
                  data-testid="last"
                  type="button"
                  className="button"
                  variant="outline-dark"
                  disabled={currentPage === totalPages - 1 ? true : false}
                  onClick={lastPage}
                >
                  Last
                </Button>
              </InputGroup>
            </div>
          </Card.Footer>
        </>
      ) : (
        <div className="no-cashbacks">No Cashbacks</div>
      )}
    </Layout>
  );
};

export default Cashback;
