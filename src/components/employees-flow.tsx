"use client";

// Utils
import "@xyflow/react/dist/style.css";

// Components
import { ReactFlow } from "@xyflow/react";
import LogoNode from "@/components/logo-node";
import ButtonNode from "@/components/button-node";

const nodeTypes = {
  logoNode: LogoNode,
  buttonNode: ButtonNode,
};

const EmployeesFlow = ({ company, data }: { company: any; data: any[] }) => {
  let totalEmployee = data.reduce((acc, curr) => {
    if (curr.value === null) return acc;
    return acc + +(curr.value ?? 0);
  }, 0);

  const buttonHeight = 40;
  const buttonYMargin = 35;
  const logoHeight = 109;
  const totalButtonHeight =
    buttonHeight * data.length + buttonYMargin * (data.length - 1);
  const logoY = (totalButtonHeight - logoHeight) / 2;

  const mainNode = {
    id: "1",
    type: "logoNode",
    data: {
      employee: totalEmployee,
      handlesCount: data.length,
      company: company,
    },
    position: { x: 800, y: logoY },
  };

  const companyNodes = data.map((item, index) => ({
    id: (index + 2).toString(),
    type: "buttonNode",
    data: { company: item },
    position: { x: 150, y: 75 * index + 35 },
  }));

  const nodes = [mainNode, ...companyNodes];

  const edges = companyNodes.map((company) => ({
    id: `${mainNode.id}-${company.id}`,
    source: mainNode.id,
    target: company.id,
    sourceHandle: company.id,
    style: {
      stroke: "#E8EAF8",
      strokeWidth: 48,
    },
  }));

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      zoomOnDoubleClick={false}
      zoomOnPinch={false}
      zoomOnScroll={false}
      nodesDraggable={false}
      panOnDrag={false}
      panOnScroll={false}
      proOptions={{ hideAttribution: true }}
      fitView
    />
  );
};

export default EmployeesFlow;
