"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var ci_1 = require("react-icons/ci");
var go_1 = require("react-icons/go");
var Modal_1 = require("./Modal");
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var api_1 = require("@/api");
var Task = function (_a) {
    var task = _a.task;
    var _b = react_1.useState(false), openModalEdit = _b[0], setopenModalEdit = _b[1];
    var _c = react_1.useState(false), openModalDelete = _c[0], setopenModalDelete = _c[1];
    //we put task.text as initial state of tasktoEdit because there are already text
    var _d = react_1.useState(task.text), taskToEdit = _d[0], setTaskToEdit = _d[1];
    var router = navigation_1.useRouter();
    var handleSubmitEditTodo = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    //we use preventDefault to manually handle submit.
                    console.log("submit1");
                    e.preventDefault();
                    return [4 /*yield*/, api_1.editTodo({
                            id: task.id,
                            text: taskToEdit
                        })];
                case 1:
                    _a.sent();
                    console.log("submit2");
                    //closing module after submiting newTask
                    setopenModalEdit(false);
                    //refreshing router to get new updated Tasks list
                    router.refresh();
                    return [2 /*return*/];
            }
        });
    }); };
    // const handleKeyDown = (e) => {
    //   if (e.key === 'Enter') {
    //     e.preventDefault();
    //     handleSubmitEditTodo(e);
    //   }
    // };
    var handleSubmitDeleteTodo = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api_1.deleteTodo(id)];
                case 1:
                    _a.sent();
                    setopenModalDelete(false);
                    router.refresh();
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("tr", { key: task.id },
        React.createElement("td", { className: "w-full" }, task.text),
        React.createElement("td", { className: "flex gap-5" },
            React.createElement(ci_1.CiEdit, { onClick: function () { return setopenModalEdit(true); }, cursor: "pointer", className: "text-blue-500", size: 25 }),
            React.createElement(Modal_1["default"], { modalOpen: openModalEdit, setModalOpen: setopenModalEdit },
                React.createElement("form", { onSubmit: handleSubmitEditTodo },
                    React.createElement("h3", { className: "font-bold text-lg" }, "Edit task"),
                    React.createElement("button", { 
                        //  ako imamo više botuna unutar FORME bitno ih je specifirati (type="button")
                        //  ako nam nisu  botun koji submita FORMU ili (type="submit")
                        //  kako bi pritiskom tipke Enter mogli submitat formu i da ne koristimo botun sa (type="submit")
                        type: "button", onClick: function (e) {
                            e.preventDefault();
                            setopenModalEdit(false);
                        }, className: "btn btn-sm btn-circle btn-ghost absolute right-2 top-2" }, "\u2715"),
                    React.createElement("div", { className: "modal-action" },
                        React.createElement("input", { value: taskToEdit, onChange: function (e) { return setTaskToEdit(e.target.value); }, 
                            // onKeyDown={handleKeyDown}
                            type: "text", placeholder: "Type here", className: "input input-bordered w-full" }),
                        React.createElement("button", { type: "submit", className: " hover:text-white hover:bg-blue-500 btn" }, "Submit")))),
            React.createElement(go_1.GoTrash, { onClick: function () { return setopenModalDelete(true); }, cursor: "pointer", className: "text-red-500", size: 25 }),
            React.createElement(Modal_1["default"], { modalOpen: openModalDelete, setModalOpen: setopenModalDelete },
                React.createElement("h3", { className: "font-bold text-lg" }, "Delete task?"),
                React.createElement("button", { onClick: function () { return setopenModalDelete(false); }, className: "btn btn-sm btn-circle btn-ghost absolute right-2 top-2" }, "\u2715"),
                React.createElement("div", { className: "modal-action flex items-center" },
                    React.createElement("p", { className: "w-full" }, taskToEdit),
                    React.createElement("button", { onClick: function () { return handleSubmitDeleteTodo(task.id); }, className: "hover:text-white hover:bg-red-500 btn" }, "DELETE"))))));
};
exports["default"] = Task;
