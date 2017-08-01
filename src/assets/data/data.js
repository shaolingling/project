var Data = {
  companyList: [
    { id: "01", name: "A公司" },
    { id: "02", name: "B公司" },
    { id: "03", name: "c公司" }
  ],
  operEles: [
    { ename: "position", cname: "岗位" },
    { ename: "technology", cname: "技术" },
    { ename: "product", cname: "产品" },
    { ename: "finance", cname: "财务" },
    { ename: "policy", cname: "政策" },
    { ename: "legal", cname: "法律" },
    { ename:"people",cname: "人才" },
    { ename:"patent",cname: "专利" },
    { ename:"market",cname: "市场" }
  ],
  result:[
    {id:"01",name:"张三",nature:"A",society:"A",profession:"A"},
    {id:"02",name:"李四",nature:"A",society:"A",profession:"B"},
    {id:"03",name:"王五",nature:"A",society:"B",profession:"C"}
  ]
};

export default Data;
export const companyList = Data.companyList;
export const operEles = Data.operEles;
export const result = Data.result;

