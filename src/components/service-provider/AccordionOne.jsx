import React from "react";

const AccordionOne = () => {
  const accordionContent = [
    {
      id: "1",
      dataBsTarget: "#collapseOne",
      dataBsTargetId: "collapseOne",
      arialExpand: "true",
      title: "O que é o mercado livre de energia?",
      descriptions: `O Mercado Livre de Energia é um ambiente competitivo de negociação de energia elétrica em que os participantes podem negociar livremente todas as condições comerciais, como fornecedor, preço, quantidade de energia contratada, período de suprimento, pagamento, entre outras.`,
      itemShow: "show",
      collapseItem: "",
    },
    {
      id: "2",
      dataBsTarget: "#collapseTwo",
      dataBsTargetId: "collapseTwo",
      arialExpand: "false",
      title: "Eu posso mudar para o mercado livre de energia?",
      descriptions: `O Mercado Livre de Energia é um ambiente competitivo de negociação de energia elétrica em que os participantes podem negociar livremente todas as condições comerciais, como fornecedor, preço, quantidade de energia contratada, período de suprimento, pagamento, entre outras.`,
      itemShow: "",
      collapseItem: "collapsed",
    },
    {
      id: "3",
      dataBsTarget: "#collapseThree",
      dataBsTargetId: "collapseThree",
      arialExpand: "false",
      title: "O que significa ACR?",
      descriptions: `O Mercado Livre de Energia é um ambiente competitivo de negociação de energia elétrica em que os participantes podem negociar livremente todas as condições comerciais, como fornecedor, preço, quantidade de energia contratada, período de suprimento, pagamento, entre outras.`,
      itemShow: "",
      collapseItem: "collapsed",
    },
  ];
  return (
    <>
      {accordionContent.map((item) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header">
            <button
              className={`accordion-button ${item.collapseItem}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={item.dataBsTarget}
              aria-expanded={item.arialExpand}
            >
              {item.title}
            </button>
          </div>
          <div
            id={item.dataBsTargetId}
            className={`accordion-collapse collapse ${item.itemShow}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.descriptions}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AccordionOne;
