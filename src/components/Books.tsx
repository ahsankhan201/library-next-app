import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";

import { EditIcon } from "./tableHeaders/EditIcon";
import { IconButton } from "./tableHeaders/IconButton";


export default function books() {
  const column1=[
    {name:'Cover',uid:'cover'},
    {name:'Title',uid:'title'},
    {name:'Author',uid:'author'},
    {name:'Avarage rating',uid:'Avarage rating'},
    {name:'Rating',uid:'Rating'},
    {name:'Shelves',uid:'Shelves'},
    {name:'Review',uid:'Review'},
    {name:'Date read',uid:'Date read'},
    {name:'Date added',uid:'Date added'},
  ]
  const columns = [
    { name: "NAME", uid: "name" },
    { name: "ROLE", uid: "role" },
    { name: "STATUS", uid: "status" },
    { name: "ACTIONS", uid: "actions" },
  ];
  const users = [
    {
      id: 1,
      name: "Tony Reichert",
      role: "CEO",
      team: "Management",
      status: "active",
      age: "29",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      email: "tony.reichert@example.com",
    },
    {
      id: 2,
      name: "Zoey Lang",
      role: "Technical Lead",
      team: "Development",
      status: "paused",
      age: "25",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      email: "zoey.lang@example.com",
    },
    {
      id: 3,
      name: "Jane Fisher",
      role: "Senior Developer",
      team: "Development",
      status: "active",
      age: "22",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      email: "jane.fisher@example.com",
    },
    {
      id: 4,
      name: "William Howard",
      role: "Community Manager",
      team: "Marketing",
      status: "vacation",
      age: "28",
      avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
      email: "william.howard@example.com",
    },
    {
      id: 5,
      name: "Kristen Copper",
      role: "Sales Manager",
      team: "Sales",
      status: "active",
      age: "24",
      avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
      email: "kristen.cooper@example.com",
    },
  ];
  const renderCell = (user:any, columnKey:any) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <User squared src={user.avatar} name={cellValue} css={{ p: 0 }}>
            {user.email}
          </User>
        );
      case "role":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
            <Row>
              <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>
                {user.team}
              </Text>
            </Row>
          </Col>
        );
      case "actions":
        return (
          <Row justify="center" align="center">
            
            <Col css={{ d: "flex" }}>
              {/* <Tooltip content="Edit user">
                <IconButton onClick={() => console.log("Edit user", user.id)}>
                  <EditIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip> */}
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };
  return (
    <Table
      aria-label="Example table with custom cells"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
      selectionMode="none"
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column
            key={column.uid}
            hideHeader={column.uid === "actions"}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={users}>
        {(item) => (
          <Table.Row>
            {(columnKey) => (
              <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}
