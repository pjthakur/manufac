import React from "react";
import { Table } from "@mantine/core";
import { dataset } from "../data/dataset";
import { calculateAverageYieldAndArea } from "../utils/calculateProduction";
import "./tableStyles.css";

const CropAverageTable: React.FC = () => {
  const data = calculateAverageYieldAndArea(dataset);

  const rows = data.map((item, index) => (
    <Table.Tr key={index}>
      <Table.Td>{item.Crop}</Table.Td>
      <Table.Td>{item.AverageYield}</Table.Td>
      <Table.Td>{item.AverageArea}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <div className="tableHeading" id="table2">
      Average Yield and Cultivation of Crop between the year 1950-2020
      </div>
      <Table
        striped
        highlightOnHover
        withTableBorder
        withColumnBorders
        horizontalSpacing="xl"
        verticalSpacing="sm"
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Crop</Table.Th>
            <Table.Th>Average Yield of the crop between 1950-2020</Table.Th>
            <Table.Th>
              Average Cultivative Area of the crop between 1950-2020 (Ha)
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </>
  );
};

export default CropAverageTable;
