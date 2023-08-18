"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
class UserModel {
    constructor({ ...values }) {
        this.id = values.id;
        this.password = values.password;
        this.email = values.email;
        this.phone = values.phone;
        this.firstName = values.firstName;
        this.lastName = values.lastName;
        this.imageProfile = values.imageProfile;
        this.dateBirth = new Date(values.dateBirth);
        this.status = values.status;
        this.numberMaxExchanges = values.numberMaxExchanges;
        this.place = values.place;
        this.age = this.calculateAge(this.dateBirth);
        this.qualification = this.calculateQualifation(values.qualification);
    }
    calculateQualifation(payload) {
        return 5;
    }
    calculateAge(dateBirth) {
        const currentDate = new Date();
        let age = currentDate.getFullYear() - dateBirth.getFullYear();
        if (currentDate.getMonth() < dateBirth.getMonth() ||
            (currentDate.getMonth() === dateBirth.getMonth() &&
                currentDate.getDate() < currentDate.getDate())) {
            age--;
        }
        return age.toString();
    }
}
exports.UserModel = UserModel;
//# sourceMappingURL=user.model.js.map