// 字符串的扩展
// 1、模板字符串

{
    let str = `<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>`
    console.log(str)
}
{
    let a = `\`\`：反引号是模板字符串的符号`
    console.log(a)
}
{
    let a = 10;
    let str = `里面可以放变量${a}${1+1}`
    console.log(str)
}
{
    let template = `
<ul>
  <% for(let i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;
    function compile(template){
        const evalExpr = /<%=(.+?)%>/g;
        const expr = /<%([\s\S]+?)%>/g;

        template = template
            .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
            .replace(expr, '`); \n $1 \n  echo(`');

        template = 'echo(`' + template + '`);';

        let script =
            `(function parse(data){
    let output = "";

    function echo(html){
      output += html;
    }

    ${ template }

    return output;
  })`;

        return script;
    }
    let parse = eval(compile(template));
    console.log(parse({ supplies: [ "broom", "mop", "cleaner" ] }))
}