def solution(S):
    newS = S.replace("one","1")
    newR = newS.replace("two","2")
    newR = eval(newR)
    return newR
    pass