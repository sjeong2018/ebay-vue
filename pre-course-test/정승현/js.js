/*
����)
�Ʒ��� API�� 100���� �Խñۿ� ���� ������ �迭�� ���� �� �ִ� API�Դϴ�.
https://jsonplaceholder.typicode.com/posts

HTTP ��� ���̺귯���� �� API�� ȣ���� �� Ư�� userId�� �ش��ϴ� ������ ������ ���� ����ϴ�.
ex) userId�� 1�̸� ���� �̸��� user1

�Խñ� ���� �� �ش� userId�� �ش��ϴ� �Խñ��� title ������ ��� �Ʒ��� ���� ��ü ���·� �����մϴ�.
ex) user1 = {
  title1: '',
  title2: '',
  ...
  title10: ''
};
*/

/*
ex) API ����
[
  {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
  }
  ...
]
*/

/*
ex) ��� ����
userId�� 1�� �Խñ��� ������ ��ü�� ��� ����
var user1 = {
  title1: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  title2: "qui est esse",
  ...
}

var user2 = {
  title1: ...,
  title2: ...
}
*/

// TODO: �Ʒ��� ����� �ۼ����ּ���.
const url = "https://jsonplaceholder.typicode.com/posts"
let res;

var makeRequest = (method, url) => {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
}

makeRequest('GET', url)
.then((datums) => {
  resultData(JSON.parse(datums));
})
.catch((err) => {
  console.error('error!', err.statusText);
});


const flatMapReducer = (accumulator, value, index, array) => {
  const key = "userId";
  if (value.hasOwnProperty(key)) {
      if (accumulator.indexOf(value[key]) === -1) {
        accumulator.push(value[key]);
      }
  }
  return accumulator;
};

var resultData = (res) => {
	const resUserId = res.reduce(flatMapReducer, []);

	for (const value of resUserId)
	{
		window['user'+ value] = {};
		let restitle = res.filter((item) => item.userId === value).map((item2) => item2.title)
		for (let [k,v] of restitle.entries()) {
			window['user' + value]["title" + (k + 1)] = v;
		}
	}
	console.log(user1);
	console.log(user2);
}
