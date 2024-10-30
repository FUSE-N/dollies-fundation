def isValid(s: str) -> bool:
    stack = []
    bracket_map = {")": "(", "]": "[", "}": "{"}

    for char in s:
        if char in bracket_map:
            top_element = (
                stack.pop() if stack else "#"
            )  # pop the top if stack is not empty
            if bracket_map[char] != top_element:
                return False
        else:
            stack.append(char)

    return not stack


if __name__ == "__main__":
    line = input()
    if isValid(line):
        print("Valid")
    else:
        print("inValid")
