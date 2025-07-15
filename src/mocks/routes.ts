export default function (this: any) {
  this.namespace = "api";
  this.get("/users", function () {
    return {
      users: [
        { id: 1, name: "홍길동" },
        { id: 2, name: "김철수" },
      ],
    };
  });
}
