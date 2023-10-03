# Description: Python does not support overloading.
class Tester:
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def default_text():
        return "Hello World"

    def default_text(string):
        return string


if __name__ == "__main__":
    print(Tester.default_text())
    print(Tester.default_text("Hello World"))
