import { ASSERTION, CodeDemo, EXPECT_VALUE, VAR_TYPE } from './model';

export const CODE_STRING_LIST = [
    new CodeDemo(VAR_TYPE.STRING, ASSERTION.A, `expect(value).to.be.a('string')`, '为字符串类型'),
    new CodeDemo(VAR_TYPE.STRING, ASSERTION.EQUAL, `expect(value).to.equal('${EXPECT_VALUE.STRING}')`, '相等'),
    new CodeDemo(VAR_TYPE.STRING, [ASSERTION.EQUAL, ASSERTION.NOT], `expect(value).to.not.equal('${EXPECT_VALUE.STRING}')`, '不相等'),
    new CodeDemo(VAR_TYPE.STRING, ASSERTION.LENGTH_OF, `expect(value).to.have.lengthOf(${EXPECT_VALUE.STRING.length})`, '字符长度有多长')
];

export const CODE_NUMBER_LIST = [
    new CodeDemo(VAR_TYPE.NUMBER, ASSERTION.A, `expect(value).to.be.a('number')`, '为数字类型'),
    new CodeDemo(VAR_TYPE.NUMBER, ASSERTION.EQUAL, `expect(value).to.equal(${EXPECT_VALUE.NUMBER})`, '相等'),
    new CodeDemo(VAR_TYPE.NUMBER, [ASSERTION.EQUAL, ASSERTION.NOT], `expect(value).to.not.equal(${EXPECT_VALUE.NUMBER})`, '不相等'),
    new CodeDemo(VAR_TYPE.NUMBER, ASSERTION.ABOVE, `expect(value).to.be.above(${EXPECT_VALUE.NUMBER - 1})`, '大于某个值(推荐用 equal)'),
    new CodeDemo(VAR_TYPE.NUMBER, ASSERTION.LEAST, `expect(value).to.be.at.least(${EXPECT_VALUE.NUMBER})`, '大于或等于某个值(推荐用 equal)')
];

export const CODE_OBJECT_LIST = [
    new CodeDemo(VAR_TYPE.OBJECT, ASSERTION.A, `expect(value).to.be.a('object')`, '为对象类型'),
    new CodeDemo(VAR_TYPE.OBJECT, ASSERTION.EQL, `expect(value).to.eql(${JSON.stringify(EXPECT_VALUE.OBJECT)})`, '相等'),
    new CodeDemo(VAR_TYPE.OBJECT, [ASSERTION.EQL, ASSERTION.NOT], `expect(value).to.not.eql(${JSON.stringify(EXPECT_VALUE.OBJECT)})`, '不相等'),
    new CodeDemo(VAR_TYPE.OBJECT, ASSERTION.PROPERTY, `expect(value).to.have.property('name')`, '是否包含某个属性'),
    new CodeDemo(VAR_TYPE.OBJECT, ASSERTION.PROPERTY, `expect(value).to.have.property('name','matman')`, '是否包含某个属性且等于指定值')
];

export const CODE_ARRAY_LIST = [
    new CodeDemo(VAR_TYPE.ARRAY, ASSERTION.A, `expect(value).to.be.a('array')`, '为数组类型'),
    new CodeDemo(VAR_TYPE.ARRAY, ASSERTION.EQL, `expect(value).to.eql(${JSON.stringify(EXPECT_VALUE.ARRAY)})`, '相等'),
    new CodeDemo(VAR_TYPE.ARRAY, [ASSERTION.EQL, ASSERTION.NOT], `expect(value).to.not.eql(${JSON.stringify(EXPECT_VALUE.ARRAY)})`, '不相等'),
    new CodeDemo(VAR_TYPE.ARRAY, ASSERTION.INCLUDE, `expect(value).to.include('a')`, '是否包含某个元素（注意这里比较复杂，请仔细阅读API）'),
    new CodeDemo(VAR_TYPE.ARRAY, ASSERTION.LENGTH_OF, `expect(value).to.have.lengthOf(${EXPECT_VALUE.ARRAY.length})`, '有多少个元素')
];

export function getCodeDemoList(varType) {
    let list = [];

    switch (varType) {
        case VAR_TYPE.STRING:
            list = CODE_STRING_LIST;
            break;

        case VAR_TYPE.NUMBER:
            list = CODE_NUMBER_LIST;
            break;

        case VAR_TYPE.OBJECT:
            list = CODE_OBJECT_LIST;
            break;

        case VAR_TYPE.ARRAY:
            list = CODE_ARRAY_LIST;
            break;

        default:
            break;
    }

    return list;
}