"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersService = void 0;
const common_1 = require("@nestjs/common");
const customer_model_1 = require("./customer.model");
const uuid_1 = require("uuid");
const mockCustomers_json_1 = __importDefault(require("../data/mockCustomers.json"));
let CustomersService = class CustomersService {
    constructor() {
        this.customers = mockCustomers_json_1.default;
    }
    insertCustomer(name, merchantId) {
        const customerId = uuid_1.v4();
        const newCustomer = new customer_model_1.Customer(customerId, name, merchantId);
        this.customers.push(newCustomer);
        return customerId;
    }
    getCustomers() {
        return [...this.customers];
    }
    getCustomer(customerId) {
        const customer = this.findCustomerById(customerId);
        return Object.assign({}, customer);
    }
    updateCustomer(customerId, name, merchantId) {
        const customer = this.findCustomerById(customerId);
        if (name) {
            customer.setName(name);
        }
        if (merchantId) {
            customer.setMerchantId(merchantId);
        }
        return Object.assign({}, customer);
    }
    deleteCustomer(customerId) {
        this.customers = this.customers.filter((customer) => customer.id != customerId);
    }
    findCustomerById(customerId) {
        const customer = this.customers.find((customer) => customer.id === customerId);
        if (!customer) {
            throw new common_1.NotFoundException('Could not find the customer.');
        }
        return customer;
    }
};
CustomersService = __decorate([
    common_1.Injectable()
], CustomersService);
exports.CustomersService = CustomersService;
//# sourceMappingURL=customers.service.js.map