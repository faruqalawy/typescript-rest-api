import supertest from "supertest"
import { app } from "../src/application/app"
import { ContactTest, UserTest } from "./test-util"
import { logger } from "../src/application/logging"

describe("POST /api/contacts", () => {

    beforeEach(async () => {
        await UserTest.create();
    })

    afterEach(async () => {
        await ContactTest.deleteAll();
        await UserTest.delete();
    })

    it("should be able to create a new contact", async () => {
        const response = await supertest(app)
            .post("/api/contacts")
            .set("X-API-TOKEN", "test")
            .send({
                first_name: "Faruq",
                last_name: "Alawy",
                email: "faruq@gmail.com",
                phone: "08999999999999"
            });

        logger.debug(response.body);
        expect(response.status).toBe(200);
        expect(response.body.data.first_name).toBe("Faruq");
        expect(response.body.data.last_name).toBe("Alawy");
        expect(response.body.data.email).toBe("faruq@gmail.com");
        expect(response.body.data.phone).toBe("08999999999999");
    })

    it('should reject create new contact if data is invalid', async () => {
        const response = await supertest(app)
            .post("/api/contacts")
            .set("X-API-TOKEN", "test")
            .send({
                first_name: "",
                last_name: "",
                email: "invalid email format",
                phone: "0899999999999993475392583485203"
            });

        logger.debug(response.body);
        expect(response.status).toBe(400);
        expect(response.body.errors).toBeDefined();
    })

})

describe("GET /api/contacts/:contactId", () => {

    beforeEach(async () => {
        await UserTest.create()
        await ContactTest.create();
    });

    afterEach(async () => {
        await ContactTest.deleteAll();
        await UserTest.delete();
    });

    it('should be able get contact', async () => {
        const contact = await ContactTest.get();
        const response = await supertest(app)
            .get(`/api/contacts/${contact.id}`)
            .set("X-API-TOKEN", "test");

        logger.debug(response.body);
        expect(response.status).toBe(200);
        expect(response.body.data.id).toBeDefined();
        expect(response.body.data.first_name).toBe(contact.first_name);
        expect(response.body.data.last_name).toBe(contact.last_name);
        expect(response.body.data.email).toBe(contact.email);
        expect(response.body.data.phone).toBe(contact.phone);
    });

    it('should reject to get contact if contact is not found', async () => {
        const contact = await ContactTest.get();
        const response = await supertest(app)
            .get(`/api/contacts/${contact.id + 1}`)
            .set("X-API-TOKEN", "test");

        logger.debug(response.body);
        expect(response.status).toBe(404);
        expect(response.body.errors).toBeDefined();
    });

})

describe("PUT /api/contacts/:contactId", () => {

    beforeEach(async () => {
        await UserTest.create()
        await ContactTest.create();
    });

    afterEach(async () => {
        await ContactTest.deleteAll();
        await UserTest.delete();
    });

    it('should be able to update contact', async () => {
        const contact = await ContactTest.get()
        const response = await supertest(app)
            .put(`/api/contacts/${contact.id}`)
            .set("X-API-TOKEN", "test")
            .send({
                first_name: "faruq",
                last_name: "alawy",
                phone: "99999",
                email: "faruq@mail.com"
            })
        
        logger.debug(response.body)
        expect(response.status).toBe(200);
        expect(response.body.data.first_name).toBe("faruq");
        expect(response.body.data.last_name).toBe("alawy");
        expect(response.body.data.phone).toBe("99999");
        expect(response.body.data.email).toBe("faruq@mail.com");
    })

    it('should should reject to update contact if data is invalid', async () => {
        const contact = await ContactTest.get()
        const response = await supertest(app)
            .put(`/api/contacts/${contact.id}`)
            .set("X-API-TOKEN", "test")
            .send({
                first_name: "",
                last_name: "",
                phone: "",
                email: ""
            })
        
        logger.debug(response.body)
        expect(response.status).toBe(400);
        expect(response.body.errors).toBeDefined();
    })

})